#!/bin/bash

var1=1
oper=null
var2=1

plus () { let "tmp = var1 + var2"; echo "$tmp"; }
sub () { let "tmp = var1 - var2"; echo "$tmp"; }
mult () { let "tmp = var1 * var2"; echo "$tmp"; }
div () { let "tmp = var1 / var2"; echo "$tmp"; }
mod () { let "tmp = var1 % var2"; echo "$tmp"; }
exp () { let "tmp = var1 ** var2"; echo "$tmp"; }

while true
do
	read -e var1 oper var2
	if [[ $var1 -ne "exit" || $var2 -ne "exit" ]]
	then
				
		case $oper in
		'+')
			plus
		;;
		'-')
			sub
		;;
		'*')
			mult
		;;
		'/')
			div
		;;
		'%')
			mod
		;;
		'**')
			exp
		;;		
		*)
			echo "error"
			break					
		esac
	
	#elif [[ !(-z var1 || -z var2) ]]; then echo "error"; break
	elif [[ $var1 == "exit" ]]; then echo "bye"; break	
	else echo "error"; break
	fi
done

