import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="bg-gray-800 text-gray-100 mb-36 mt-10">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
                        Blog Section
                    </p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
                        Frequently Asked Questions
                    </h2>

                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">
                                What is the purpose of React Router?
                            </summary>
                            <div className="px-4 pb-4">
                                <p>
                                    React Router is a standard library for
                                    routing in React. It enables the navigation
                                    among views of various components in a React
                                    Application, allows changing the browser
                                    URL, and keeps the UI in sync with the URL.
                                    Let us create a simple application to React
                                    to understand how the React Router works.
                                    The application will contain three
                                    components: home component, about a
                                    component, and contact component. We will
                                    use React Router to navigate between these
                                    components.
                                </p>
                            </div>
                        </details>
                        <details open="">
                            <summary className="py-2 outline-none cursor-pointer focus:underline">
                                How does context api work?
                            </summary>
                            <div className="px-4 pb-4">
                                <p>
                                    The React Context API is a way for a React
                                    app to effectively produce global variables
                                    that can be passed around. This is the
                                    alternative to "prop drilling" or moving
                                    props from grandparent to child to parent,
                                    and so on. Context is also touted as an
                                    easier, lighter approach to state management
                                    using Redux.
                                </p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">
                                What is useHref()?
                            </summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>
                                    href is html anchor tag attribute to
                                    navigate to another page. Here a new page
                                    will be loaded. RouterLink is used to
                                    achieve the same functionality but angular 2
                                    or above are single page applications, where
                                    the page should not reload. RouterLink
                                    navigates to New Url and the component is
                                    rendered in place of routeroutlet without
                                    reloading the page.
                                </p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
