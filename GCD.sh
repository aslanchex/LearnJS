#!/bin/bash

"Наибольшее общее кратное, числа вводятся в строку через пробел"

var1=1
var2=2
while [[ -n $var1 && -n $var2 ]]
do
	read -e var1 var2
	if [[ -z $var1 ]]; then break; fi
	if [[ -z $var2 ]]; then break; fi
		
	for i in {100..1}
	do 
		a=0
		b=0		

		let "a = $var1 % $i "
		let "b = $var2 % $i "
		if [[ $a -eq 0 && $b -eq 0 ]]
		then
			echo "GCD is $i"
			break
		else
			continue
		fi
	done
done
echo "bye"
