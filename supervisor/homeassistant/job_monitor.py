"""Monitoring class for Supervisor jobs."""

from .const import WSEvent, WSType
from .websocket import HomeAssistantWebSocket
from ..const import ATTR_DATA, ATTR_EVENT, ATTR_NAME, ATTR_STATE, ATTR_TYPE
from ..utils.job_monitor import JobMonitorInterface


class JobMonitor(JobMonitorInterface):
    """Monitoring class."""

    def __init__(self, websocket: HomeAssistantWebSocket, name: str):
        """Initialize job monitor."""
        self._websocket = websocket
        self._name = name

    def send_progress(self, progress, buffer=None):
        """Send job progress to core in WS event."""
        self._websocket.send_command(
            {
                ATTR_TYPE: WSType.SUPERVISOR_EVENT,
                ATTR_DATA: {
                    ATTR_EVENT: WSEvent.JOB_PROGRESS,
                    ATTR_NAME: self._name,
                    ATTR_STATE: {
                        "progress": progress,
                        "buffer": buffer,
                    },
                },
            }
        )
