import React from 'react'

import Sidebar from '../sidebar'
import Onboarding from '../onboarding'
import { DeleteConfirmModal } from '../delete-confirm-modal'
import {
    SidebarContainer as SidebarLeft,
    SidebarIconsContainer as SidebarIcons,
} from '../sidebar-left'
import { Header } from '../search-bar'
import { Results } from '../results'
import Head from '../../options/containers/Head'
import { Wrapper } from '../../common-ui/components'
import DragElement from './DragElement'

const Overview = () => (
    <Wrapper>
        <Head />
        <Header />
        <SidebarIcons />
        <SidebarLeft />
        <Results />
        <DeleteConfirmModal />
        <DragElement />
        <Sidebar />
        <Onboarding />
    </Wrapper>
)

export default Overview
