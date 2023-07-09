"use client"
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Button } from '@/components/ui/button';
import ComicPage from './comic';

export default function IndexPage() {
  const handle = useFullScreenHandle();

  return (
    <FullScreen handle={handle} className='flex h-full w-full flex-1 place-content-center'>
      {
        handle.active
        ?
          <ComicPage />
        :
          <Button onClick={handle.enter}>
            Enter fullscreen
          </Button>
      }
    </FullScreen>
  )
}
