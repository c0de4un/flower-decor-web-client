import { PropsWithChildren } from 'react';

type DefaultLayoutProps = PropsWithChildren<{}>;

export default function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className={'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'}>
        <main className={'w-full h-full'}>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            { props.children }
          </div>
        </main>
      </div>
    </div>
)
}