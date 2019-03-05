package Backend

object Game {
  var foodList: Array[Int] = Array()
  var playerList: Array[Int] = Array()
  var id = 1
  var value = 1
  def createPlayer(input: Player): Unit = {
    var x = input.x
    var y = input.y
    playerList = playerList :+ id
  }
  def createFood(input: Food): Unit ={
    var x = input.x
    var y = input.y
    foodList = foodList :+ value
    value += 1
  }
  def eatFood(input1: Player, input2: Food): Int ={
    if (input1.x == input2.x && input1.y == input2.y){
      input1.score += 1
    }
    input1.score
  }
  def movement(): Unit ={

  }
  def main(args: Array[String]): Unit = {
    println("hi")
  }
}
