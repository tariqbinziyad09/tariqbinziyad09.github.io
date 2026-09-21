document.addEventListener(
    "DOMContentLoaded",
    () => {


        // ======================================
        // MOBILE MENU
        // ======================================

        const menuButton =
            document.getElementById(
                "menuButton"
            );


        const navLinks =
            document.querySelector(
                ".nav-links"
            );


        if (
            menuButton &&
            navLinks
        ) {

            menuButton.addEventListener(
                "click",
                () => {

                    navLinks.classList.toggle(
                        "active"
                    );

                }
            );


            navLinks
                .querySelectorAll("a")
                .forEach(link => {

                    link.addEventListener(
                        "click",
                        () => {

                            navLinks
                                .classList
                                .remove(
                                    "active"
                                );

                        }
                    );

                });

        }



        // ======================================
        // SCROLL REVEAL
        // ======================================

        const revealElements =
            document.querySelectorAll(
                `
                .section-title,
                .about-text,
                .skill-card,
                .project-card,
                .education-card,
                .contact-card,
                .feature-card,
                .technology-card,
                .workflow-item,
                .architecture-box,
                .project-stat,
                .role-item,
                .problem-card,
                .figma-preview
                `
            );


        revealElements.forEach(
            (
                element,
                index
            ) => {

                element.classList.add(
                    "reveal"
                );


                element.style
                    .transitionDelay =
                    `${Math.min(
                        (index % 4) * 70,
                        210
                    )}ms`;

            }
        );


        const revealObserver =
            new IntersectionObserver(

                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target
                                    .classList
                                    .add(
                                        "visible"
                                    );

                            }

                        }
                    );

                },

                {
                    threshold: 0.12
                }

            );


        revealElements.forEach(
            element => {

                revealObserver.observe(
                    element
                );

            }
        );



        // ======================================
        // NAVBAR SCROLL
        // ======================================

        const header =
            document.querySelector(
                "header"
            );


        window.addEventListener(
            "scroll",
            () => {

                if (
                    window.scrollY > 30
                ) {

                    header
                        ?.classList
                        .add(
                            "scrolled"
                        );

                }

                else {

                    header
                        ?.classList
                        .remove(
                            "scrolled"
                        );

                }

            },

            {
                passive: true
            }
        );



        // ======================================
        // SMOOTH LINKS
        // ======================================

        document
            .querySelectorAll(
                'a[href^="#"]'
            )
            .forEach(link => {

                link.addEventListener(
                    "click",
                    event => {

                        const href =
                            link.getAttribute(
                                "href"
                            );


                        if (
                            href === "#"
                        ) {

                            return;

                        }


                        const target =
                            document.querySelector(
                                href
                            );


                        if (
                            target
                        ) {

                            event
                                .preventDefault();


                            target
                                .scrollIntoView({

                                    behavior:
                                        "smooth",

                                    block:
                                        "start"

                                });

                        }

                    }
                );

            });

    }
);