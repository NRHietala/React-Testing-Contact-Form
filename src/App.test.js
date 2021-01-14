import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm from '../src/components/ContactForm';
import { act } from 'react-dom/test-utils';

// Had to use data-testid ??
// getByLabelText
// getByPlaceholderName

const testInput = {
  firstName: "Nat",
  lastName: "Hietala",
  email:"nate@test.com",
  message:"testing testing 123"
}

test("Sanity Test / Error Free Render", () => {
  render(<ContactForm />);
})

  test("testing form fields", async () => {
    // Arrange
    render(<ContactForm />);

    // Act

    // ***** Figured out with testId first *****
    // const firstName = screen.getByTestId("firstName");
    // const lastName = screen.getByTestId("lastName");
    // const email = screen.getByTestId('email');
    // const message = screen.getByTestId("message");
    // const button = screen.getByTestId('submit')

    // ***** Testing with Regex *****
    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const email = screen.getByLabelText(/email/i);
    const message = screen.getByLabelText(/message/i);
    const button = screen.getByRole('button')

    // ***** tested with variables *****
  //   act(() => {
  //   userEvent.type(firstName, testInput.firstName);
  //   userEvent.type(lastName, testInput.lastName);
  //   userEvent.type(message, testInput.message);
  //   userEvent.type(email, testInput.email);
  // })

    // ***** Testing with strings *****
  act(() => {
    userEvent.type(firstName, "nat");
    userEvent.type(lastName, "hietala");
    userEvent.type(message, "testing testing 123");
    userEvent.type(email, "nate@test.com");
  })

    await act(async()=> {
      userEvent.click(button)
    });

    // Assert

    expect(firstName.value).toMatch("nat");
    expect(lastName.value).toMatch("hietala");
    expect(email.value).toMatch("nate@test.com");
    expect(message.value).toMatch("testing testing 123");
  })
  
