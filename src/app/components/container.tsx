import type { ElementType, ReactNode } from "react";
import { cn } from "../../lib/utils";

/*
 * The single source of horizontal gutters for page-level content.
 *
 * Every full-width section routes through this so the hero, the experience
 * list and anything added later share one left and right edge. Sections own
 * their vertical rhythm (py-*); they must not set px-* themselves, or the
 * edges drift apart again.
 *
 * The desktop gutter is the 20vw the hero has always used, so this reproduces
 * the current layout rather than redesigning it. Swapping it for a capped
 * measure (max-w-5xl px-6 sm:px-8 lg:px-12) is a one-line change here.
 */
/* The `lg:` prefix must stay in sync with MOBILE_QUERY in global-provider.tsx;
   see the note there. */
const GUTTER = "px-6 lg:px-[20vw]";

type ContainerProps = {
    as?: ElementType;
    className?: string;
    children?: ReactNode;
    id?: string;
};

export default function Container({ as: Component = "div", className, children, ...props }: ContainerProps) {
    return (
        <Component className={cn("mx-auto w-full", GUTTER, className)} {...props}>
            {children}
        </Component>
    );
}
