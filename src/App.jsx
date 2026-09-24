import {toast} from 'sonner';
import './App.css';

const fingerprint = "1C61D769C165F895A4E982D7BE79F6B0383F9F23";

function copyPGP() {
    navigator.clipboard.writeText(fingerprint)
        .then(() =>
            toast.success("PGP fingerprint copied")
        );
}

function App() {
    return (
        <>
            <div className="container page-center">
                <div className="about">
                    <div className="author">
                        <img src="/favicon.png" alt="logo"/>
                        Vladislav F.
                    </div>
                    <p>Student, DevOps, Backend</p>
                </div>
                <div className="links">
                    <p>Links:</p>
                    <ul>
                        <li>GitHub: <a href="https://github.com/vista9" target="_blank">@vista9</a></li>
                        <li>E-mail: <a href="mailto:vista9@duck.com" target="_blank">vista9 [at] duck.com</a></li>
                    </ul>
                    <p>PGP:</p>
                    <ul>
                        <li>
                            <span className="clickable hover-color" onClick={copyPGP}>
                                [fingerprint]
                            </span>
                        </li>
                        <li>
                            <a href="/key.asc" download="">
                                [download .asc]
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="buttons">
                    <img src="/web-buttons/made-on-mac.gif" alt="made-on-mac"/>
                    <img src="/web-buttons/tailscale.png" alt="i-use-tailscale-network"/>
                </div>
            </div>
        </>
    );
}

export default App;
