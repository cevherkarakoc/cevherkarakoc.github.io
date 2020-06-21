import React from "react"
import { Flex, Badge } from "theme-ui"

const ProjectInfo = ({ project }) => {
  const tags = project.service.split("|");
  return < Flex sx={{ mt: 2, mb: [1, 2], flexWrap: `wrap` }}>
    {tags.map(tag => <Badge key={tag} variant='outline' mr={2} mb={2} py={1} px={2}>{tag}</Badge>)}
  </Flex >
}

export default ProjectInfo