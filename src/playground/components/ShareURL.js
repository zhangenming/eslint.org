import React, { useState } from "react";

export default function ShareURL({ url }) {
	const [isDataCopied, setIsDataCopied] = useState(false);
	const [showShareURL, setShowShareURL] = useState(false);

	return (
		<div>
			<button
				className="playground-toggle c-btn c-btn--ghost"
				onClick={() => setShowShareURL(currentValue => !currentValue)}
			>
				<h2 data-config-section-title>Share URL</h2>
				<svg
					height="20"
					width="20"
					viewBox="0 0 20 20"
					aria-hidden="true"
					focusable="false"
					fill="currentColor"
					style={{
						transform: showShareURL ? "rotate(180deg)" : null,
					}}
				>
					<path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
				</svg>
			</button>
			{showShareURL && (
				<div data-config-section>
					<div className="share-url-wrapper">
						<div className="share-url">
							<input
								type="text"
								id="code-snippet"
								value={url || window.location}
								aria-readonly="true"
								readOnly
								tabIndex="-1"
							/>
							<button
								className="share-url__btn"
								id="copyBtn"
								aria-labelledby="copy-button-label"
								onClick={() => {
									const copyText =
										document.getElementById("code-snippet");

									copyText.select();
									navigator.clipboard.writeText(
										copyText.value,
									);
									setIsDataCopied(true);
									setTimeout(() => {
										setIsDataCopied(false);
									}, 4000);
								}}
							>
								<span hidden id="copy-button-label">
									Copy URL to clipboard
								</span>
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									className="c-icon"
									role="img"
									aria-label="copy"
									fill="none"
									focusable="false"
								>
									<path
										d="M4.16667 12.5H3.33333C2.89131 12.5 2.46738 12.3244 2.15482 12.0118C1.84226 11.6993 1.66667 11.2754 1.66667 10.8333V3.33332C1.66667 2.8913 1.84226 2.46737 2.15482 2.15481C2.46738 1.84225 2.89131 1.66666 3.33333 1.66666H10.8333C11.2754 1.66666 11.6993 1.84225 12.0118 2.15481C12.3244 2.46737 12.5 2.8913 12.5 3.33332V4.16666M9.16667 7.49999H16.6667C17.5871 7.49999 18.3333 8.24618 18.3333 9.16666V16.6667C18.3333 17.5871 17.5871 18.3333 16.6667 18.3333H9.16667C8.24619 18.3333 7.5 17.5871 7.5 16.6667V9.16666C7.5 8.24618 8.24619 7.49999 9.16667 7.49999Z"
										stroke="currentColor"
										strokeWidth="1.66667"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
						</div>
						{isDataCopied && (
							<span
								id="share-url__announcement"
								className="share-url__announcement"
								aria-live="polite"
								aria-atomic="true"
							>
								Copied to clipboard.
							</span>
						)}
					</div>
				</div>
			)}
		</div>
	);
}
