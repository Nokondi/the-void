# Use the official Python image.
# https://hub.docker.com/_/python
FROM python:3.11-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY requirements.txt /usr/src/app
RUN pip install -r requirements.txt

EXPOSE 5000

# Run the web service on container startup. Here we use the gunicorn
# webserver, with one worker process and 8 threads.
# For environments with multiple CPU cores, increase the number of workers
# to be equal to the cores available.
CMD ["gunicorn", "-k", "gevent", "-w", "1", "-b", ":5000", "app:app"]