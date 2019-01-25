const LinkedList = require("listlib").LinkedList;
const Queue = require("../src/Queue.js");
const Stack = require("../src/Stack.js");
function isListElement(element) {
	return ((typeof element) === "object") && (element instanceof LinkedList.ListElement);
}
// Simple LinkedList iterator which enumerates all ListElements.
function* listIterator(list) {
	var curElement = list.head;
	var nextElement;
	while (curElement !== null && list.size > 0) {
		nextElement = curElement.next;
		yield curElement;
		curElement = nextElement;
	}
}
// Tests a LinkedList's non-head/tail ListElements by value & quantity.
function countValues(list, quantity) {
	var loc = 1;
	for (const element of listIterator(list)) {
		expect(isListElement(element)).toBe(true);
		expect(element.parent).toBe(list);
		if (element !== list.head && element !== list.tail) {
			expect(element.payload).toBe(loc);
			if (loc === quantity) return;
			loc++;
		}
		if (element === list.tail) return;
	}
}
describe("Stack", function () {
	it("should contain elements added via add", function () {
		const s = new Stack();
		expect(s.add(1)).toBe(true);
		expect(s.add(2)).toBe(true);
		expect(s.add(3)).toBe(true);
		expect(s.add(4)).toBe(true);
		expect(s.add(5)).toBe(true);
		countValues(s.list, 5);
		expect(s.list.size).toBe(5);
		expect(s.size).toBe(5);
	});
	it("should contain elements added from an iterable", function () {
		const s = new Stack([1, 2, 3, 4, 5]);
		expect(s.list.size).toBe(5);
		expect(s.size).toBe(5);
		const one = s.list.head.next;
		expect(isListElement(one) && one.payload === 1).toBe(true);
		const two = one.next;
		expect(isListElement(two) && two.payload === 2).toBe(true);
		const three = two.next;
		expect(isListElement(three) && three.payload === 3).toBe(true);
		const four = three.next;
		expect(isListElement(four) && four.payload === 4).toBe(true);
		const five = four.next;
		expect(isListElement(five) && five.payload === 5).toBe(true);
	});
	it ("should enumerate values via Symbol.iterator", function () {
		const s = new Stack([1, 2, 3, 4, 5]);
		var loc = 1;
		for (const value of s) {
			expect(value).toBe(loc)
			loc++
		}
	});
	it("should remove elements via remove", function () {
		const s = new Stack([1, 2, 3, 4, 5]);
		expect(s.size).toBe(5);
		expect(s.remove()).toBe(5);
		expect(s.remove()).toBe(4);
		expect(s.remove()).toBe(3);
		expect(s.remove()).toBe(2);
		expect(s.remove()).toBe(1);
		expect(s.remove()).toBe(null);
		expect(s.list.size).toBe(0);
		expect(s.size).toBe(0);
	});
	it("should search for an index via item", function () {
		const s = new Stack([1, 2, 3, 4, 5]);
		expect(s.item(0)).toBe(1);
		expect(s.item(1)).toBe(2);
		expect(s.item(2)).toBe(3);
		expect(s.item(3)).toBe(4);
		expect(s.item(4)).toBe(5);
	});
	it("should return the first element via head", function () {
		const s = new Stack([1, 2, 3, 4, 5]);
		expect(s.head()).toBe(1);
	});
	it("should return the last element via end", function () {
		const s = new Stack([1, 2, 3, 4, 5]);
		expect(s.end()).toBe(5);
	});
	it("should reject additions when the limit is reached", function () {
		const s = new Stack([1, 2, 3, 4, 5], 5);
		expect(s.add(0)).toBe(false);
		s.remove();
		expect(s.add(1)).toBe(true);
	});
});
describe("Queue", function () {
	it("should contain elements added via add", function () {
		const q = new Queue();
		expect(q.add(1)).toBe(true);
		expect(q.add(2)).toBe(true);
		expect(q.add(3)).toBe(true);
		expect(q.add(4)).toBe(true);
		expect(q.add(5)).toBe(true);
		countValues(q.list, 5);
		expect(q.list.size).toBe(5);
		expect(q.size).toBe(5);
	});
	it("should contain elements added from an iterable", function () {
		const q = new Queue([1, 2, 3, 4, 5]);
		expect(q.list.size).toBe(5);
		expect(q.size).toBe(5);
		const one = q.list.head.next;
		expect(isListElement(one) && one.payload === 1).toBe(true);
		const two = one.next;
		expect(isListElement(two) && two.payload === 2).toBe(true);
		const three = two.next;
		expect(isListElement(three) && three.payload === 3).toBe(true);
		const four = three.next;
		expect(isListElement(four) && four.payload === 4).toBe(true);
		const five = four.next;
		expect(isListElement(five) && five.payload === 5).toBe(true);
	});
	it ("should enumerate values via Symbol.iterator", function () {
		const q = new Queue([1, 2, 3, 4, 5]);
		var loc = 1;
		for (const value of q) {
			expect(value).toBe(loc)
			loc++
		}
	});
	it("should remove elements via remove", function () {
		const q = new Queue([1, 2, 3, 4, 5]);
		expect(q.list.size).toBe(5);
		expect(q.remove()).toBe(1);
		expect(q.remove()).toBe(2);
		expect(q.remove()).toBe(3);
		expect(q.remove()).toBe(4);
		expect(q.remove()).toBe(5);
		expect(q.remove()).toBe(null);
		expect(q.list.size).toBe(0);
		expect(q.size).toBe(0);
	});
	it("should search for an index via item", function () {
		const q = new Queue([1, 2, 3, 4, 5]);
		expect(q.item(0)).toBe(1);
		expect(q.item(1)).toBe(2);
		expect(q.item(2)).toBe(3);
		expect(q.item(3)).toBe(4);
		expect(q.item(4)).toBe(5);
	});
	it("should return the first element via head", function () {
		const q = new Queue([1, 2, 3, 4, 5]);
		expect(q.head()).toBe(1);
	});
	it("should return the last element via end", function () {
		const q = new Queue([1, 2, 3, 4, 5]);
		expect(q.end()).toBe(5);
	});
	it("should reject additions when the limit is reached", function () {
		const q = new Queue([1, 2, 3, 4, 5], 5);
		expect(q.add(6)).toBe(false);
		q.remove();
		expect(q.add(5)).toBe(true);
	});
});