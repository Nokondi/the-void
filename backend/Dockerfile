# Use the official Python image.
# https://hub.docker.com/_/python
FROM python:3.11-alpine

# Copy local code to the container image.
COPY . /app/
WORKDIR /app/

# Install production dependencies.
RUN pip install -r requirements.txt

EXPOSE 5000

# Run the web service on container startup. Here we use the gunicorn
# webserver, with one worker process and 8 threads.
# For environments with multiple CPU cores, increase the number of workers
# to be equal to the cores available.
CMD ["gunicorn", "--worker-class", "eventlet", "-w", "1", "app:app"]