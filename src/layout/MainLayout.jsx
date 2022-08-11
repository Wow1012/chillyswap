import Header from "./header";

const MainLayout = ({children}) => {
  return (
    <>
        <Header />
        <main>
          {children}
        </main>
    </>
  )
}

export default MainLayout;