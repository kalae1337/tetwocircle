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
    it('in: 3, out: 28.27', () => {
        const expected = 28.27
        const actual = calcArea(3)
        expect(expected).closeTo(actual, 0.01)
    })
    it('in: 20, out: 1256.63', () => {
        const expected = 1256.63
        const actual = calcArea(20)
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

    it('in: -5, out: hiba', () => {
        expect(() => calcArea(-5).to.throw(Error)
    )
    })

    it('in: a, out: hiba', () => {
        expect(() => calcArea("a").to.throw(Error)
    )
    })

    it('in: 10000001, out: hiba', () => {
        expect(() => calcArea(10000001).to.throw(Error)
    )
    })
})