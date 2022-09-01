import { useEffect, useState } from "react";

const useTheme = (theme: string) => {
    const [crurrentTheme, setCurrentTheme] = useState<any>();
    useEffect(() => {
        theme &&
            !!window.localStorage.getItem(theme) &&
            setCurrentTheme(() => window.localStorage.getItem(theme));

            console.log(theme, 'theme', window.localStorage.getItem(theme))
    }, [theme]);
    return {
        crurrentTheme: crurrentTheme ? JSON.parse(crurrentTheme) : {}
    };
};

export { useTheme };
