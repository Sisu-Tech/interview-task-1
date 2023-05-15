#!/bin/bash

prettier --write --ignore-unknown .
DEBUG=eslint:cli-engine eslint --cache --fix .