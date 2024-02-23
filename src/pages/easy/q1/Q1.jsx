import { Link } from "react-router-dom"
import { MAIN } from "@/routes.js"
import img from '@/assets/easy/q1/images/image-omelette.jpeg'

import Card from "@/components/easy/q1/Card"
import Ingredients from "@/components/easy/q1/Ingredients"
import Instructions from "@/components/easy/q1/Instructions"
import Table from "@/components/easy/q1/Table"

import './q1.scss'

function Q1() {
  return (
    <div id="easy-q1">
      <div className="container">
        <div className="img-wrapper">
          <Link to={MAIN}>
            <img className="img-wrapper__img" src={img} />
          </Link>
        </div>

        <div className="content">
          <h1 className="title mb-6">Simple Omelette Recipe</h1>

          <p className="color--wenge-brown mb-8">
            An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs
            cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
          </p>

          <Card />

          <Ingredients />

          <hr className="separator my-8" />

          <Instructions />

          <hr className="separator my-8" />

          <Table />
        </div>
      </div>
    </div>
  )
}

export default Q1
