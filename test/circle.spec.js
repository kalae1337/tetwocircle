/*
* File: circle.spec.js
* Author: Dóra Boglárka
* Copyright: 2026, Dóra Boglárka
* Group: Sz I N
* Date: 2026-02-25
* Github: https://github.com/kalae1337
* Licenc: MIT
*/

import { calcArea } from "../src/circle.js";
import { expect } from "chai";

describe('calcArea normál tesztesetek', () => {
    it('in: 30, out: 2827.43', () => {
        const expected = 2827.43
        const actual = calcArea(30)
        expect(expected).closeTo(actual, 0.01)
    })
    it('in: 35, out: 3848.45', () => {
        const expected = 3848.45
        const actual = calcArea(35)
        expect(expected).closeTo(actual, 0.01)
    })
})

describe('calcArea határértékek', () => {
    it('in: 1, out: 3.14', () => {
        const expected = 3.14
        const actual = calcArea(1)
        expect(expected).closeTo(actual, 0.01)
    })
    it('in: 10000000, out: 314159265358979.3', () => {
        const expected = 314159265358979.3
        const actual = calcArea(10000000)
        expect(expected).closeTo(actual, 0.01)
    })
})

describe('calcArea hibakezelés', () => {
    it('in: 0, out: hiba', () => {
        expect(() => calcArea(0).to.throw(Error)
        )
    })

    it('in: 10000001, out: hiba', () => {
        expect(() => calcArea(10000001).to.throw(Error)
    )
    })
})