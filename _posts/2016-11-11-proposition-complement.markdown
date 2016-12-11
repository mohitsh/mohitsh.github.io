---
layout: post
title:  "Axioms, Propositions and Proofs"
description: "Brief description of a proof and its building blocks"
date:   2016-11-11 22:43:32 +0530
tags: [mathematics, logic]
comments: true
share: true
---

In mathematics  operators OR, AND, XOR and NOT are used to combine propositions.
These combinations of propositions can sometimes provide pretty interesting counter intuitive results.
To understand that first we need to understand the building blocks.

* Propositions are basically statements that can either true or false.

* To establish the truth about proposition a proof is required. 

* In order to do that some basic axioms are assumed. 

* Axioms are propositions that are simply accepted, for example there is only one straight line between two points.

From those assumed axioms, one after another logical deductions are derived which finally settles at the proposition we initially tried to prove.
Hence the flow chart for proof mechanism:

Axioms  \-\>  logical deductions  \-\>  various  \-\>  deduced  \-\>  propositions  \-\>  Proposition (final logical deduction)

##### Truth Table for Implication

**P**|**Q**|**P IMPLIES Q**
-------|--------|-------
T      |T     |T
T      |F     |F
F      |T     |T
F      |F     |T

#### Example:
If Pigs can fly then you can solve **Riemann Hypothesis**

At first it might sound like an *insult*. But breaking it into two propositions and applying simple implication truth table, It would sound like a *complement* (provided you what Riemann Hypothesis is)

So lets break the combined proposition into two separate propositions P and Q

> If Pigs can fly (P).
> You can solve Riemann Hypothesis (Q).

Now the P part is *False*. We all know that pigs can't fly. Well, after looking at the truth table of Implication, it is evident that no matter what the status of Q is the implication is always true. 
Hence you can solve **Riemann Hypothesis**, and that's a big compliment. :sunglasses:  
