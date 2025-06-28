import { useContext } from "react";
import { ThemeContext } from "./themeContext";

function Page() {
    const { dark, toggle } = useContext(ThemeContext)
    return (
        <> <div style={{
            backgroundColor: dark ? '#333' : '#eee',
            color: dark ? '#fff' : '#000',
            padding: '20px',
        }}>
            <h1>{dark ? 'Dark' : 'Light'} Theme</h1>
            <button onClick={toggle}>Toggle Theme</button>
        </div>
        </>
    );
}

export default Page;