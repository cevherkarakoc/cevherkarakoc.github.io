import React from "react"
import { Link as TLink, Flex } from "theme-ui"
import { Link } from "gatsby"

const Navigation = ({ nav }) => (
  <Flex
    as="nav"
    sx={{
      flex: 1,
      justifyContent: `flex-start`,
      order: [2, 1],
      "a:not(:last-of-type)": {
        mr: 3,
      },
    }}
    aria-label="Primary Navigation"
    style={{ minWidth: "auto" }}
  >
    {nav.map((n) => (
      <TLink
        as={Link}
        sx={{ color: `text`, ":hover": { color: `primary`, textDecoration: `none` } }}
        key={n.slug}
        to={n.slug}
      >
        {n.title}
      </TLink>
    ))}
  </Flex>
)

export default Navigation