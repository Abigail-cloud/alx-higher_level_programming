#!/bin/bash
# sends a request to a URL, and displays only the status code.
curl -s -o /dev/null -w "%{http_code}" "$1"
