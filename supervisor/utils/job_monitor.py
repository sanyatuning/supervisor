"""Monitoring interface for Supervisor jobs."""


class JobMonitorInterface:
    """Monitoring interface."""

    def send_progress(self, progress, buffer=None) -> None:
        """Send progress."""
