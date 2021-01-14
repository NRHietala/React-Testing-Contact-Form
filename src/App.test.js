import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
  
import ContactForm from '../src/components/ContactForm';
import { act } from 'react-dom/test-utils';

const testInput = {
  firstName: "Nate",
  lastName: "Hietala",
  email:"nate@test.com",
  message:"testing testing 123"
}

test("Sanity Test / Error Free Render", () => {
  render(<ContactForm />);
})

  test("testing form fields", async() => {
    // Arrange
    render(<ContactForm />);

    // Act
    const firstName = screen.queryByLabelText("First Name*");
    const lastName = screen.queryByLabelText("Last Name*");
    // const emailInput = screen.getByTestId('email');
    const message = screen.queryByLabelText("Message");
    const button = screen.getByRole('button')

    userEvent.type(firstName, testInput.firstName);
    userEvent.type(lastName, testInput.lastName);
    userEvent.type(message, testInput.email);
    // userEvent.type(email, testInput.message);

    await act(async()=> {
      userEvent.click(button)
    });

    // Assert

    expect(firstName.value).toMatch(testInput.firstName)
    expect(lastName.value).toMatch(testInput.lastName)
    // expect(email.value).toMatch(testInput.email)
    expect(message.value).toMatch(testInput.message)
  })
