import * as images from '../images/images.js'
import { useState } from 'react'
import { UseStore } from '../hooks/useStore.js'
import { UseKeyboard } from '../hooks/useKeyboard.js'
import { useEffect } from 'react'

export const TextureSelector = () => {
    const [visible, setVisible] = useState(true)
    const [texture, setTexture] = UseStore(state => [state.texture, state.setTexture])

    const {
        dirt,
        grass,
        glass,
        wood,
        log
    } = UseKeyboard()

    useEffect(()=>{
        const visibilityTimeOut = setTimeout(()=>{
            setVisible(false)
        },1000)

        setVisible(true)

        return () => {
            clearTimeout(visibilityTimeOut)
        }
    },[texture])

    useEffect(()=>{
        const options = {
            dirt,
            glass,
            grass,
            wood,
            log
        }

        const selectedTexture = Object
        .entries(options)
        .find(([texture, isEnabled]) => isEnabled)

        if(selectedTexture){
            const [textureName] = selectedTexture
            setTexture(textureName)
        } 
    },[dirt,glass,grass,wood,log])

    return (
        <div className='texture-selector'>
            {
                Object
                .entries(images)
                .map(([imgKey, img])=>{
                    return (
                        <img 
                            className={texture === imgKey.replace('Img','' ? 'selected' : '')}
                            key={imgKey}
                            src={img}
                            alt={imgKey}
                        />
                    )
                })
            }
        </div>
    )
}