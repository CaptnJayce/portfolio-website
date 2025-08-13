"use client";

export default function NavBar() {
    return (
        <nav className="w-full flex gap-32 pt-10 justify-between">
            <div className="pl-100">
                <button
                    type="button"
                    onClick={() => alert("This isn't implemented yet")}
                >
                    Something
                </button>
            </div>

            <div className="flex gap-10 pr-100">
                <button
                    type="button"
                    onClick={() => alert("This also isn't implemented yet")}
                >
                    Something Else
                </button>

                <button
                    type="button"
                    onClick={() =>
                        alert("This is actually also not implemented yet")
                    }
                >
                    Something Else Else
                </button>
            </div>
        </nav>
    );
}
