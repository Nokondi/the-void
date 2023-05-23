# Use the official Python image.
# https://hub.docker.com/_/python
FROM python:3.9-alpine as flask-backend

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY requirements.txt /usr/src/app
RUN pip install -r requirements.txt

EXPOSE 8000

# Run the web service on container startup. Here we use the gunicorn
# webserver, with one worker process and 8 threads.
# For environments with multiple CPU cores, increase the number of workers
# to be equal to the cores available.
CMD ["gunicorn", "-k", "eventlet", "--workers=1", "--bind=0.0.0.0:8000", "app:app"]