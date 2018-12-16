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