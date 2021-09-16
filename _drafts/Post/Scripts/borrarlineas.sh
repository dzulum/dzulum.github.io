#/bin/bash
borrar las lineas iniciales en un archivo
for file in $(ls) *.txt
	do sed '1,$1' d $file.txt > $file-1.txt
done