"use client"
import React, { createRef } from 'react'
import { ModelViewer, activateAR } from '@r2u/react-ar-components'
import type { ModelViewerElement } from '@r2u/react-ar-components'

const Page = () => {
    const usdz = 'https://pavan-public.s3.ap-south-1.amazonaws.com/Mech_Drone.usdz'
    const imageUrl = 'https://via.placeholder.com/150'
    const viewerRef = createRef<ModelViewerElement>()

    return (
        <div>
            <div>
                <h1>AR</h1>
                <button type="button" onClick={() => activateAR({ usdz })}>
                    View in 3D
                </button>
            </div>
            <div>
                <h1>ModelViewer</h1>
                <ModelViewer
                    ref={viewerRef}
                    src={usdz}
                    alt="3D model"
                    poster={imageUrl}
                    style={{
                        width: '500px',
                        height: '500px',
                    }}
                />
            </div>
        </div>
    )
}

export default Page