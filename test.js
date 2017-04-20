import test from 'ava';
import m from '.';

test(t => {
	t.is(m().length, 4);
});
