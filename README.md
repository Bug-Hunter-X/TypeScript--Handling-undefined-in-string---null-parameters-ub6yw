# TypeScript: Handling undefined in string | null parameters

This repository demonstrates a common TypeScript error related to type checking with string | null parameters and how to handle undefined inputs effectively.

## Problem

The `printName` function is designed to accept a string or null value. However, if we pass `undefined` to the function, TypeScript throws an error even though it seems intuitively similar to null. 

## Solution

The solution involves explicitly handling undefined values by either adding undefined to the union type or using optional chaining.  The improved version adds undefined to the union type making undefined a valid type for the function.