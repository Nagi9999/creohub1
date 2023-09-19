
export default function Form() {
  return (
    <div class="container">
    <div class="form">
      <div class="contact-form">
        <h2>Contact Me</h2>
        <form>
          <div class="form-group">
            <label for="name">Name:</label>
           <input  type="text" id="name" name="name" placeholder="Enter your name" required></input>
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Best Player"
              required
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>

  </div>
  )
}
