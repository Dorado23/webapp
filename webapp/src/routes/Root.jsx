import react from 'react';
import { Outlet } from "react-router-dom";

function Root() {
    return (
        <div>
            <section>
                {/* Render child route components */}
                <Outlet/>
            </section>
        </div>
    );
}
export default Root; 