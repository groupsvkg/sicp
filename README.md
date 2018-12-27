# SICP - Structure and Interpretation of Computer Programs

# Building Abstractions with Procedures

## How ideas are made
- Combining several **_simple ideas_** into one compound one, and thus all **_complex ideas_** are made.
- The second is bringing two ideas, whether simple or complex, together, and setting them by one another so as to take a view of them at once, without uniting them into one, by which it gets all its **_ideas of relations_**.
- The third is separating them from all other ideas that accompany them in their real existence: this is called **_abstraction_**, and thus all its general ideas are made.

## Definitions
- **_Computational process_**: Abstracts beings that inhabit computers
- **_Progarm_**: Pattern of rules

## Master software engineer
- Ability to **_organize programs_** for intended results
- **_Visualize_** system behaviour in advance
- Structure programs to be easily **_debuggable_**

## Well-designed systems
- Modular
- Parts can be separately
  - constructed
  - replaced
  - debugged

## Programming in Lisp
- Characterstics
  - Model of computation - **_recursive equations_**
  - **_Symbol manipulating capabilites_** for attacking programming problems i.e. symbolic differentiation and integration of algebric expression.
  - Data objects - **_atoms_** and **_lists_**
  - Second oldest language(only Fortran is older)
  - Lisp **_procedure_** can themselves be represented and manupulated as **_Lisp data_**.

## The Elements of Programming
- **_primitive expressions_**, which represent the simplest entities the language is concerned with
- **_means of combination_**, by which compound elements are built from simpler ones
- **_means of abstraction_**, by which compound elements can be named and manipulated as units.

## Powerful programming language should be able to describe
- **_primitive data_**
- **_primitive procedure_**
- **_combining and abstracting_** procedures and data

## Compound Procedures
```
(define (<name> <formal parameters>) <body>)

Example:
(define (square x) (* x x))
```

## Substitution Model
- **_normal-order evaluation_** fully expand and then reduce
- **_applicative-order evaluation_** evaluate the arguments and then apply

## Conditional Expression and Predicates
```
(cond (<p1> <e1>)
      (<p2> <e2>)
      .
      .
      .
      (<pn> <en>))

(<p> <e>) == clause
 <p> == predicate
 <e> == consequent expression
```
## Procedure as Black-Box Abstractions
- It is crucial that each procedure accomplishes an **_identifiable task_** that can be used as a module in defining other procedures.
- A user should not need to know **_how_** the procedure is implemented in order to **_use_** it.
- **_Bound variable_**: procedures formal parameters(Body of procedure as their **_scope_**)
- **_Free variables_**: variables not bound(**_external to definition_**) i.e **_<, -, +, custom procedure_**...
- **_Internal definitions and block structure_**: nesting of definitions is called **_block structure_**. it **_helps in organizing the construction of large programs_**.

## Procedures and the Processes They Generate
- The ability to **_visualize the consequences of the actions_** under consideration is crucial to becoming an expert programmer
- **_Deferred operation_**: **_expansion_** caused by process build up.
- **_Recursive process_**: type of process where **_expansion_** occurs by a chain of **_deferred operations_** followed by **_contraction_** as the operations are actually performed.
- **_Linear recursive process_**: A computation where the length of the chain of deffered operations, and hence the **_amount of information_** needed to keep track of it, **_grows linearly_**.
- **_Iterative process_**: process whose state can be summarized by a **_fixed number of state variables_**, together with a fixed rule that describes how the state variables should be updated as the **_process moves from state to state_** and an(optional) end test that specifies conditions usder which the process should terminate.
- **_Contrast Iterative Vs Recursive_**: 
  - In iterative case: the program variables provide a complete description of the state of the process at any point.
  - Iterative process can be **_stopped_** between steps and **_resumed_** with the value of the **_state variables_**.
- **_Tail recursive_**: An implementation which executes an iterative process in **_constant space_**, even if the iterative process is described by a recursive procedure.

## Tree Recursion
- **_Counting Change_**: The number of ways to change amount a using n kinds of coin equals
  - The number of ways to change amount a using all but the first king of coin, plus
  - The number of ways to change amount a - d using all n kinds of coins, where d is the denomination of the first kind of coin.
- **_Divide into two groups_**
  - Those that do not use any of the first kind of coin, and
  - Those that do
- **_Degenerate Cases_**
  - If a is exactly 0, we should count that as 1 way to make change.
  - if a is less than 0, we should count that as 0 ways to make change.
  - If n is 0, we should count that as 0 ways to make change.

## Orders of Growth
- In general there are a number of **_properties_** of the **_problem_** with respect to which it will be desirable to analyze a given process