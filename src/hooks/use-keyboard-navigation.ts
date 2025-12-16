import { useEffect, useCallback } from "react";
import { TIMELINE_EVENTS, type TimelineEvent } from "@/data/timeline";

export function useKeyboardNavigation(
  selectedEvent: TimelineEvent | null,
  onViewDetails: (event: TimelineEvent) => void
) {
  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      // Only handle arrow keys when no dialog is open
      if (!selectedEvent && (e.key === "ArrowRight" || e.key === "ArrowLeft")) {
        e.preventDefault();

        // Find all timeline cards
        const cards = document.querySelectorAll('[data-timeline-card]');
        const focusedCard = document.activeElement;
        
        if (!focusedCard || !focusedCard.hasAttribute('data-timeline-card')) {
          // No card focused, focus the first one
          if (cards.length > 0) {
            (cards[0] as HTMLElement).focus();
          }
          return;
        }

        const currentIndex = Array.from(cards).indexOf(focusedCard);
        let nextIndex = currentIndex;

        if (e.key === "ArrowRight") {
          nextIndex = Math.min(currentIndex + 1, cards.length - 1);
        } else if (e.key === "ArrowLeft") {
          nextIndex = Math.max(currentIndex - 1, 0);
        }

        if (nextIndex !== currentIndex && cards[nextIndex]) {
          (cards[nextIndex] as HTMLElement).focus();
          // Scroll card into view
          cards[nextIndex].scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }

      // Enter key to open details
      if (e.key === "Enter" && document.activeElement?.hasAttribute('data-timeline-card')) {
        const cardIndex = parseInt(
          document.activeElement.getAttribute('data-card-index') || '0'
        );
        const event = TIMELINE_EVENTS[cardIndex];
        if (event) {
          onViewDetails(event);
        }
      }
    },
    [selectedEvent, onViewDetails]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);
}
