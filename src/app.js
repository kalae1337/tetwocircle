import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { calcArea } from './circle'

const doc = {
    form: document.getElementById('plotsForm'),
    result: document.getElementById('result'),
    radius1: document.getElementById('radius1'),
    radius2: document.getElementById('radius2'),
    area1: document.getElementById('area1'),
    area2: document.getElementById('area2')
}

doc.form.addEventListener('submit', (e) => {
    e.preventDefault()
    const area1 = calcArea(Number(doc.radius1.value))
    const area2 = calcArea(Number(doc.radius2.value))
    doc.area1.value = area1
    doc.area2.value = area2
    doc.result.value = area1 + area2
})



