"""Init file for HassIO addon docker object."""
import logging

import docker

from . import DockerBase
from ..const import ATTR_SLUG, ATTR_PORTS
from ..tools import get_version_from_env

_LOGGER = logging.getLogger(__name__)

HASS_DOCKER_NAME = 'homeassistant'


class DockerHomeAssistant(DockerBase):
    """Docker hassio wrapper for HomeAssistant."""

    def __init__(self, config, loop, dock, addon_config, image):
        """Initialize docker homeassistant wrapper."""
        super().__init__(config, loop, dock, image=image)
        self.addon_config

    @property
    def docker_name(self):
        """Return name of docker container."""
        return "addon_{}".format(self.addon_config[ATTR_SLUG])

    def _run(self):
        """Run docker image.

        Need run inside executor.
        """
        if self._is_running():
            return

        # cleanup old container
        self._stop()

        try:
            self.container = self.dock.containers.run(
                self.image,
                name=self.docker_name,
                detach=True,
                network_mode='bridge',
                ports=self.addon_config[ATTR_PORTS],
                restart_policy={
                    "Name": "on-failure",
                    "MaximumRetryCount": 10,
                },
                volumes={
                    self.config.path_config_docker:
                        {'bind': '/config', 'mode': 'rw'},
                    self.config.path_ssl_docker:
                        {'bind': '/ssl', 'mode': 'rw'},
                })

            self.version = get_version_from_env(
                self.container.attrs['Config']['Env'])
        except docker.errors.DockerException as err:
            _LOGGER.error("Can't run %s -> %s.", self.image, err)
            return False

        return True
