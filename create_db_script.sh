#!/bin/bash

# ECHO COMMAND


#echo hello world!

#VARIABLES
# Uppercase by convention
# Letters, numbers, underscores

NAME = "ashley"
#echo "my name is $NAME"
echo "my name is ${NAME}"

# USER INPUT
read -p "enter your name: " NAME
echo "hello $NAME, nice to meet you"
