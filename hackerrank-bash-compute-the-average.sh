# Compute the Average 
# https://www.hackerrank.com/challenges/bash-tutorials---compute-the-average/problem
sum=0
read N

for i in $(seq 1 $N); do
    read number
    sum=$(( $sum + $number ))
done

printf "%.3f\n" `echo "$sum / $N" | bc -l`