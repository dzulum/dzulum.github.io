#!/bin/sh
for file in `ls *`
do
new=`basename $file html`
lynx -dump $file > ${new}.txt
done