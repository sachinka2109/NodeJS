This File is only for the purpose of documentation and reading.

Data-types:
1.primitive
2.Non-primitive

1. primitive - int,boolean,undefined,null,symbol,string.
2. non-primitive - arrays, objects.

Variables :
    There are three types of variables:
    1. var
    2. let 
    3. const

I. var:
    1.We can use var to declare variables.
    2.can be used globally to declare variables.
    3.If we log the value before declaring var then it will be undefined.
    4.If we have two variables of same name then the value will be the latest variable declared.
disadvantage:
    1.Major disadvantage is that suppose consider example:
    var a = 1;
    var a = 'Sachin';
    This can cause problems in the code which is why it is necessary to understand var before declare variable.

II. let: 
    1. let is used to declare a variable instead of var to avoid problems discussed above.
    2. let provides a way to tackle the above problem.
    3. let keyword would not let us declare a variable with same name instead throwing error.

III. const: 
    1. const is used to declare a variable whose value cannot be changed.
    2. consider the following example:
        const a = 20;
        a=10; 
    3.The above example will throw an error since we cannot change the value of constant.
    4.However that will change if the variable declared is an array or object.

