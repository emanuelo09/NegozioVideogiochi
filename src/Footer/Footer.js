import './Footer.css'


export function Footer() {

    return (

        <>
            <div class="row">
                <div class="col">
                <ul class="wrapper">
                <li class="icon facebook">
                    <span class="tooltip">Facebook</span>
                    <span><i class="bi bi-facebook"></i></span>
                </li>
                <li class="icon twitter">
                    <span class="tooltip">Twitter</span>
                    <span><i class="bi bi-twitter"></i></span>
                </li>
                <li class="icon instagram">
                    <span class="tooltip">Instagram</span>
                    <span><i class="bi bi-instagram"></i></span>
                </li>
                <li class="icon github">
                    <span class="tooltip">Github</span>
                    <span><i class="bi bi-github"></i></span>
                </li>
                <li class="icon youtube">
                    <span class="tooltip">Youtube</span>
                    <span><i class="bi bi-youtube"></i></span>
                </li>
            </ul>
                </div>
            </div>
        </>

    );

}