FROM mcr.microsoft.com/devcontainers/go:1.22-bookworm

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update

RUN curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
RUN apt-get install -y nodejs