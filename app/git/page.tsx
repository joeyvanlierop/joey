"use client"

import { useState, useRef } from "react";
import Link from "next/link";

export default function Alias() {
    const [isCopied, setisCopied] = useState(false);
    const codeRef = useRef<HTMLPreElement>(null);

    const handleCopy = async () => {
        if (!codeRef.current) return;

        const text = codeRef.current.innerText;

        try {
            await navigator.clipboard.writeText(text);
            setisCopied(true);
            setTimeout(() => setisCopied(false), 1500);
        } catch (error) {
            setisCopied(false);
            console.error("Failed to copy text:", error);
        }
    };

    return (
        <div className="flex flex-col justify-center items-start">
            <Link
                className="font-header font-medium text-mono-9 no-underline mb-4"
                href="/"
            >
                Joey Van Lierop
            </Link>
            <h1 className="font-header font-medium">.gitconfig</h1>
            <article className="prose dark:prose-invert prose-headings:font-header prose-headings:text-base prose-headings:font-medium">
                <div className="relative group">

                    <pre ref={codeRef}>
                        <code>
                            {`[user]
    name = Joey Van Lierop
    email = joey.vanlierop@me.com
[init]
    defaultBranch = main
[alias]
    co = checkout
    cob = checkout -b
    coo = !git fetch && git checkout
    br = branch
    brd = branch -d
    brD = branch -D
    merged = branch --merged
    st = status
    aa = add -A .
    cm = commit -m
    aacm = !git add -A . && git commit -m
    cp = cherry-pick
    amend = commit --amend -m
    develop = !git checkout develop && git pull origin develop
    staging = !git checkout staging && git pull origin staging
    master = !git checkout master && git pull origin
    po = push origin
    pu = !git push origin \`git branch --show-current\`
    pod = push origin dev
    pos = push origin staging
    pom = push origin master
    poh = push origin HEAD
    pogm = !git push origin gh-pages && git checkout master && git pull origin master && git rebase gh-pages && git push origin master && git checkout gh-pages
    pomg = !git push origin master && git checkout gh-pages && git pull origin gh-pages && git rebase master && git push origin gh-pages && git checkout master
    plo = pull origin
    plod = pull origin dev
    plos = pull origin staging
    plom = pull origin master
    ploh = pull origin HEAD
    unstage = reset --soft HEAD^
    ls = log --pretty=format:"%C(yellow)%h%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate
    ll = log --pretty=format:"%C(yellow)%h%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --numstat
    f = "!git ls-files | grep -i"
    gr = grep -Ii
    la = "!git config -l | grep alias | cut -c 7-"`}
                        </code>
                    </pre>
                    <button
                        type="button"
                        className={`absolute top-2 right-2 px-2 py-1 rounded text-sm aspect-square transition-colors duration-75 ${isCopied ? "text-mono-7" : "text-mono-10"} bg-mono-1`}
                        onClick={handleCopy}
                    >
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    </button>
                </div>
            </article>
        </div>
    );
}