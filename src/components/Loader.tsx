import { useState } from 'react'
import { useEffect } from 'react'

import { Progress } from '@/components/ui/progress'

function Loader(): JSX.Element {
    const [progress, setProgress] = useState<number>(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress < 100) {
                    return prevProgress + 10
                }
                return 100
            })
        }, 500)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="flex items-center justify-center h-screen">
            <Progress value={progress} className="w-[60%]" />
        </div>
    )
}
export default Loader
