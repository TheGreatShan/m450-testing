import Page, { sum } from './page';
import Link from 'next/link'

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
})


test("Page component renders correctly",
    ()=>{
        expect(Page()).toStrictEqual(
            <div>
                <h1>Home</h1>
                <Link href="/about">About</Link>
            </div>
        )
    })