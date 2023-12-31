import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../pages/games"

interface Props {
    gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {

    const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`
  return (
    <Heading as="h1" marginY={5} fontSize="5xl" paddingLeft={2}>
        {heading}
    </Heading>
  )
}

export default GameHeading