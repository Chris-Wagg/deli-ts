'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import MenuAccordion from './MenuAccordion'

type Anchor = 'top' | 'left' | 'bottom' | 'right'

export default function TemporaryDrawer() {
	const [state, setState] = React.useState({
		left: false,
	})

	const toggleDrawer =
		(anchor: Anchor, open: boolean) =>
		(event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === 'keydown' &&
				((event as React.KeyboardEvent).key === 'Tab' ||
					(event as React.KeyboardEvent).key === 'Shift')
			) {
				return
			}

			setState({ ...state, [anchor]: open })
		}

	const list = (anchor: Anchor) => (
		<Box
			sx={{
				width: 250,
			}}
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}></Box>
	)

	return (
		<div>
			{(['left'] as const).map((anchor) => (
				<React.Fragment key={anchor}>
					<button onClick={toggleDrawer(anchor, true)}>Menu</button>
					<Drawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}>
						{list(anchor)}
						<MenuAccordion />
					</Drawer>
				</React.Fragment>
			))}
		</div>
	)
}
