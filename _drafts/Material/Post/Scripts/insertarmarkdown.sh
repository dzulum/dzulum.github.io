#/bin/bash
#Insertar txt a otro txt
for file in $(ls) *.txt
do
	cat encabezado.md $file >> $file.md
done